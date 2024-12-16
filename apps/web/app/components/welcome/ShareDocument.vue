<script setup lang="ts">
const link = ref('https://www.paga-ui.com')
const users = ref([
	{
		avatar: '/avatars/03.png',
		avatarFallback: 'OM',
		name: 'Olivia Martin',
		email: 'm@example.com',
		permission: 'edit',
	},
	{
		avatar: '/avatars/05.png',
		avatarFallback: 'IN',
		name: 'Isabella Nguyen',
		email: 'b@example.com',
		permission: 'view',
	},
	{
		avatar: '/avatars/01.png',
		avatarFallback: 'SD',
		name: 'Sofia Davis',
		email: 'p@example.com',
		permission: 'view',
	},
])

const permissions = ref([
	{ value: 'edit', text: 'Can edit' },
	{ value: 'view', text: 'Can view' },
])
</script>

<template>
  <UiCard>
    <UiCardHeader>
      <UiCardTitle class="text-lg">Share this document</UiCardTitle>
      <UiCardDescription>
        Anyone with the link can view this document.
      </UiCardDescription>
    </UiCardHeader>
    <UiCardContent>
      <div class="flex space-x-2">
        <UiInput type="text" v-model="link" readonly />
        <UiButton variant="secondary" class="shrink-0">
          Copy Link
        </UiButton>
      </div>
      <UiSeparator class="my-4" />
      <div class="space-y-4">
        <h4 class="text-sm font-medium">
          People with access
        </h4>
        <div class="grid gap-6">
          <div v-for="user in users" class="flex items-center justify-between space-x-4">
            <div class="flex items-center space-x-4">
              <UiAvatar>
                <UiAvatarImage :src="user.avatar" />
                <UiAvatarFallback>{{ user.avatarFallback }}</UiAvatarFallback>
              </UiAvatar>
              <div>
                <p class="text-sm font-medium leading-none">
                  {{ user.name }}
                </p>
                <p class="text-sm text-muted-foreground">
                  {{ user.email }}
                </p>
              </div>
            </div>
            <UiSelect :default-value="user.permission">
              <UiSelectTrigger class="ml-auto w-[110px]">
                <UiSelectValue placeholder="Select" />
              </UiSelectTrigger>
              <UiSelectContent>
                <UiSelectItem v-for="permission in permissions" :value="permission.value">
                  {{ permission.text }}
                </UiSelectItem>
              </UiSelectContent>
            </UiSelect>
          </div>
        </div>
      </div>
    </UiCardContent>
  </UiCard>
</template>