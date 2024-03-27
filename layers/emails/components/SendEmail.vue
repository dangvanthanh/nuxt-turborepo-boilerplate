<script setup lang="ts">
const handleSendMail = async () => {
	await $fetch('/api/send-email', {
		method: 'POST',
	})
}
</script>

<template>
  <div>
    <button type="button" @click="handleSendMail()">Send Email</button>
  </div>
</template>
