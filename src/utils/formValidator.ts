export function validateFormStep1(formElement: HTMLFormElement): boolean {
    const name = formElement.querySelector<HTMLInputElement>('input[name="name"]');
    const email = formElement.querySelector<HTMLInputElement>('input[name="email"]');
    const phone = formElement.querySelector<HTMLInputElement>('input[name="phone"]');

    let valid = true;

    // Validate full name: at least 2 words and 6 characters
    if (
        !name ||
        name.value.trim().length < 6 ||
        name.value.trim().split(/\s+/).length < 2
    ) {
        name?.classList.add('border-red-500');
        valid = false;
    } else {
        name.classList.remove('border-red-500');
    }

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email.value)) {
        email?.classList.add('border-red-500');
        valid = false;
    } else {
        email.classList.remove('border-red-500');
    }

    // Validate phone (optional, but if filled must be valid format)
    if (phone && phone.value.trim() !== '' && !/^\+?[0-9\s.-]{7,15}$/.test(phone.value)) {
        phone.classList.add('border-red-500');
        valid = false;
    } else {
        phone?.classList.remove('border-red-500');
    }

    return valid;
}

export function validateFormStep2(formElement: HTMLFormElement): boolean {
    const message = formElement.querySelector<HTMLTextAreaElement>('textarea[name="message"]');

    if (!message) return false;

    const wordCount = message.value.trim().split(/\s+/).filter(Boolean).length;

    if (wordCount < 5) {
        message.classList.add('border-red-500');
        return false;
    } else {
        message.classList.remove('border-red-500');
        return true;
    }
}

