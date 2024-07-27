<template>
  <UiCard>
    <UiCardHeader class="space-y-1">
      <UiCardTitle class="text-lg">
        Create an account
      </UiCardTitle>
      <UiCardDescription>
        Enter your email below to create your account
      </UiCardDescription>
    </UiCardHeader>
    <UiCardContent class="grid gap-4">
      <div class="grid grid-cols-2 gap-6">
        <UiButton variant="outline">
          <IconGithub class="mr-2 h-4 w-4"/>
          Github
        </UiButton>
        <UiButton variant="outline">
          <IconGoogle class="mr-2 h-4 w-4"/>
          Google
        </UiButton>
      </div>
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <span class="w-full border-t" />
        </div>
        <div class="relative flex justify-center text-xs uppercase">
          <span class="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div class="grid gap-2">
        <UiLabel for="email">Email</UiLabel>
        <UiInput id="email" type="email" placeholder="m@example.com" />
      </div>
      <div class="grid gap-2">
        <UiLabel for="password">Password</UiLabel>
        <UiInput id="password" type="password" />
      </div>
    </UiCardContent>
    <UiCardFooter>
      <UiButton class="w-full">
        Create account
      </UiButton>
    </UiCardFooter>
  </UiCard>
</template>
