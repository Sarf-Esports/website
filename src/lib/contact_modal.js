// © 2022 - 2023 REVATI

export let is_contact_modal_visible = false;

/**
 * Toggles the visibility of the contact modal.
 */
export function toggle_contact_modal() {
    console.log(is_contact_modal_visible);
    let body = document.getElementsByTagName('body')[0].classList;
    if (is_contact_modal_visible == true) {
        body.remove('prevent-scroll');
        is_contact_modal_visible = false;
    } else {
        body.add('prevent-scroll');
        is_contact_modal_visible = true;
    }
    console.log(is_contact_modal_visible);
}

/**
 * @param {string} key
 */
export function close_modal(key) {
    if (key == 'Escape' && is_contact_modal_visible) {
        toggle_contact_modal();
    }
}
