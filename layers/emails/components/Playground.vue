<script setup lang="ts">
const emails = ref()
const template = ref()
const body = reactive({
	recipient: '',
	subject: '',
	filename: '',
})
const disabled = ref(false)
const selectedMail = ref(null)

const { data } = await useFetch('/api/emails')
emails.value = data.value

const handleSendMail = async () => {
	try {
		disabled.value = true
		await $fetch('/api/emails/send', {
			method: 'POST',
			body,
		})
		disabled.value = false
	} catch {
		disabled.value = false
	}
}

const handleGetMail = async (id) => {
	const data = await $fetch(`/api/emails/render/${id}`, {
		method: 'POST',
	})

	selectedMail.value = emails.value.find((email) => email.filename === id)
	template.value = data
	body.subject = selectedMail.value.label
	body.filename = id
}
</script>

<template>
  <UiTooltipProvider>
    <div class="flex flex-col h-screen">
      <div
        class="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
        <h2 class="text-lg font-semibold">
          Playground
        </h2>
        <div class="ml-auto flex w-full space-x-2 sm:justify-end" v-if="template">
          <UiPopover>
            <UiPopoverTrigger as-child>
              <UiButton>Send</UiButton>
            </UiPopoverTrigger>
            <UiPopoverContent class="w-80">
              <div class="flex flex-col space-y-4">
                <UiLabel>Recipient</UiLabel>
                <UiInput type="email" v-model="body.recipient" placeholder="your@example.com" />
                <UiLabel>Subject</UiLabel>
                <UiInput type="text" v-model="body.subject" />
              </div>
              <div class="flex justify-end mt-6">
                <UiButton :disabled="disabled" @click.prevent="handleSendMail()">Send</UiButton>
              </div>
            </UiPopoverContent>
          </UiPopover>
        </div>
      </div>
      <UiSeparator />
      <div class="flex-1">
        <div class="container h-full py-6">
          <div class="grid h-full items-stretch gap-6 md:grid-cols-[240px_minmax(0,1fr)]">
            <div class="flex h-full flex-col border shadow">
              <div class="flex flex-col p-2">
                <div class="grid gap-1">
                  <template v-if="emails.length">
                    <template v-for="email in emails" :key="email.label">
                      <a href="#"
                        :class="`inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 hover:text-white h-8 rounded-md px-3 text-xs justify-start ${email.filename === selectedMail?.filename ? 'bg-primary/90 text-white' : ''}`"
                        @click.prevent="handleGetMail(email.filename)">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        <span class="ml-2">{{ email.label }}</span>
                      </a>
                    </template>
                  </template>
                </div>
              </div>
            </div>
            <div class="flex flex-col border shadow">
              <template v-if="template">
                <iframe class="w-full h-full" :srcdoc="template.html" frameborder="0" width="100%" height="100%" />
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UiTooltipProvider>
</template>
