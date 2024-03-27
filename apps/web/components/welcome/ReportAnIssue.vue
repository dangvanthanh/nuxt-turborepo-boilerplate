<template>
  <UiCard>
    <UiCardHeader>
      <UiCardTitle class="text-lg">Report an issue</UiCardTitle>
      <UiCardDescription>
        What area are you having problems with?
      </UiCardDescription>
    </UiCardHeader>
    <UiCardContent class="grid gap-6">
      <div class="grid grid-cols-2 gap-4">
        <div class="grid gap-2">
          <UiLabel for="area">Area</UiLabel>
          <UiSelect default-value="billing">
            <UiSelectTrigger id="area">
              <UiSelectValue placeholder="Select" />
            </UiSelectTrigger>
            <UiSelectContent>
              <UiSelectItem value="team">
                Team
              </UiSelectItem>
              <UiSelectItem value="billing">
                Billing
              </UiSelectItem>
              <UiSelectItem value="account">
                Account
              </UiSelectItem>
              <UiSelectItem value="deployments">
                Deployments
              </UiSelectItem>
              <UiSelectItem value="support">
                Support
              </UiSelectItem>
            </UiSelectContent>
          </UiSelect>
        </div>
        <div class="grid gap-2">
          <UiLabel for="security-level">Security Level</UiLabel>
          <UiSelect default-value="2">
            <UiSelectTrigger id="security-level">
              <UiSelectValue placeholder="Select level" />
            </UiSelectTrigger>
            <UiSelectContent>
              <UiSelectItem value="1">
                Severity 1 (Highest)
              </UiSelectItem>
              <UiSelectItem value="2">
                Severity 2
              </UiSelectItem>
              <UiSelectItem value="3">
                Severity 3
              </UiSelectItem>
              <UiSelectItem value="4">
                Severity 4 (Lowest)
              </UiSelectItem>
            </UiSelectContent>
          </UiSelect>
        </div>
      </div>
      <div class="grid gap-2">
        <UiLabel for="subject">Subject</UiLabel>
        <UiInput id="subject" placeholder="I need help with..." />
      </div>
      <div class="grid gap-2">
        <UiLabel for="description">Description</UiLabel>
        <UiTextarea id="description" placeholder="Please include all information relevant to your issue." />
      </div>
    </UiCardContent>
    <UiCardFooter class="justify-between space-x-2">
      <UiButton variant="ghost">
        Cancel
      </UiButton>
      <UiButton>Submit</UiButton>
    </UiCardFooter>
  </UiCard>
</template>