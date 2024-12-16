<script setup lang="ts">
const sofiaRole = ref('Owner')
const jacksonRole = ref('Member')
const roles = ref([
	{ name: 'Viewer', description: 'Can view and comment.' },
	{ name: 'Developer', description: 'Can view, comment and edit.' },
	{ name: 'Billing', description: 'Can view, comment and manage billing.' },
	{ name: 'Owner', description: 'Admin-level access to all resources.' },
])
</script>

<template>
  <UiCard>
    <UiCardHeader>
      <UiCardTitle class="text-lg">Team Members</UiCardTitle>
      <UiCardDescription>
        Invite your team members to collaborate.
      </UiCardDescription>
    </UiCardHeader>
    <UiCardContent class="grid gap-6">
      <div class="flex items-center justify-between space-x-4">
        <div class="flex items-center space-x-4">
          <UiAvatar>
            <UiAvatarImage src="/avatars/01.png" />
            <UiAvatarFallback>OM</UiAvatarFallback>
          </UiAvatar>
          <div>
            <p class="text-sm font-medium leading-none">
              Sofia Davis
            </p>
            <p class="text-sm text-muted-foreground">
              m@example.com
            </p>
          </div>
        </div>
        <UiPopover>
          <UiPopoverTrigger as-child>
            <UiButton variant="outline" class="ml-auto">
              {{ sofiaRole }}
              <svg class="ml-2 h-4 w-4 text-muted-foreground" viewBox="0 0 15 15" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                  fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>
            </UiButton>
          </UiPopoverTrigger>
          <UiPopoverContent class="p-0" align="end">
            <UiCommand v-model="sofiaRole">
              <UiCommandInput placeholder="Select new role..." />
              <UiCommandList>
                <UiCommandEmpty>No roles found.</UiCommandEmpty>
                <UiCommandGroup>
                  <UiCommandItem v-for="role in roles" :value="role.name" class="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                    <p>{{role.name}}</p>
                    <p class="text-sm text-muted-foreground">
                      {{ role.description }}
                    </p>
                  </UiCommandItem>
                </UiCommandGroup>
              </UiCommandList>
            </UiCommand>
          </UiPopoverContent>
        </UiPopover>
      </div>
      <div class="flex items-center justify-between space-x-4">
        <div class="flex items-center space-x-4">
          <UiAvatar>
            <UiAvatarImage src="/avatars/02.png" />
            <UiAvatarFallback>JL</UiAvatarFallback>
          </UiAvatar>
          <div>
            <p class="text-sm font-medium leading-none">
              Jackson Lee
            </p>
            <p class="text-sm text-muted-foreground">
              p@example.com
            </p>
          </div>
        </div>
        <UiPopover>
          <UiPopoverTrigger as-child>
            <UiButton variant="outline" class="ml-auto">
              {{ jacksonRole }}
              <svg class="ml-2 h-4 w-4 text-muted-foreground" viewBox="0 0 15 15" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                  fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>
            </UiButton>
          </UiPopoverTrigger>
          <UiPopoverContent class="p-0" align="end">
            <UiCommand v-model="jacksonRole">
              <UiCommandInput placeholder="Select new role..." />
              <UiCommandList>
                <UiCommandEmpty>No roles found.</UiCommandEmpty>
                <UiCommandGroup>
                  <UiCommandItem v-for="role in roles" :value="role.name" class="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                    <p>{{role.name}}</p>
                    <p class="text-sm text-muted-foreground">
                      {{ role.description }}
                    </p>
                  </UiCommandItem>
                </UiCommandGroup>
              </UiCommandList>
            </UiCommand>
          </UiPopoverContent>
        </UiPopover>
      </div>
    </UiCardContent>
  </UiCard>
</template>