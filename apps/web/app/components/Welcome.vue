<template>
  <div class="flex flex-col gap-y-16 py-8">
    <div class="items-start justify-center gap-6 rounded-lg md:grid lg:grid-cols-2 xl:grid-cols-3">
      <div class="col-span-2 grid items-start gap-6 lg:col-span-1">
        <WelcomeContainer>
          <WelcomeCreateAccount />
        </WelcomeContainer>
        <WelcomeContainer>
          <WelcomePaymentMethod />
        </WelcomeContainer>
      </div>
      <div class="col-span-2 grid items-start gap-6 lg:col-span-1">
        <WelcomeContainer>
          <WelcomeTeamMembers />
        </WelcomeContainer>
        <WelcomeContainer>
          <WelcomeShareDocument />
        </WelcomeContainer>
        <WelcomeContainer>
          <WelcomeNotifications />
        </WelcomeContainer>
      </div>
      <div class="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
        <WelcomeContainer>
          <WelcomeReportAnIssue />
        </WelcomeContainer>
        <WelcomeContainer>
          <WelcomeGitHubCard />
        </WelcomeContainer>
        <WelcomeContainer>
          <WelcomeCookieSettings />
        </WelcomeContainer>
      </div>
    </div>
  </div>
</template>
