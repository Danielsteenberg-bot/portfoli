import { ref } from 'vue';

export function useContactForm() {
  const name = ref('');
  const email = ref('');
  const message = ref('');
  const responseMessage = ref('');
  const isSubmitting = ref(false);

  const submitForm = async () => {
    isSubmitting.value = true;
    responseMessage.value = '';

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form fields
      name.value = '';
      email.value = '';
      message.value = '';
      responseMessage.value = 'Tak for din Besked';
    } catch (error) {
      responseMessage.value = 'Der opstod en fejl. Prøv venligst igen.';
    } finally {
      isSubmitting.value = false;
    }
  };

  return {
    name,
    email,
    message,
    responseMessage,
    isSubmitting,
    submitForm,
  };
}