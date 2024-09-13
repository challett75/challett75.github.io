"use strict";

const getElement = selector => document.querySelector(selector);

const displayErrorMsgs = msgs => {
    // create a new ul element
    const ul = document.createElement("ul");
    ul.classList.add("messages");

    // create a new li element for each error message, add to ul
    for (let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }

    // if ul node isn't in document yet, add it
    const node = getElement("ul.messages");
    if (node == null) {
        // get the form element
        const form = getElement("form");

        // add ul to parent of form, before the form
        form.parentNode.insertBefore(ul, form);
    } else {
        // replace existing ul node
        node.parentNode.replaceChild(ul, node);
    }
}

const processEntries = () => {
    // get form controls to check for validity
    const email = getElement("#email_1");
    const email2 = getElement("#email_2");
    const firstName = getElement("#first_name");

    // create array for error messages
    const msgs = [];

    // check user entries for validity
    if (email.value === "") {
        msgs.push("Please enter an email address.");
    } else if (!email.value.includes("@")) {
        msgs.push("Email address must include @.");
    } else if (!email.value.includes(".")) {
        msgs.push("Email address must include a dot (.).");
    }

    if (email2.value === "" || email.value !== email2.value) {
        msgs.push("Email addresses must match.");
    }

    if (firstName.value === "") {
        msgs.push("Please enter your first name.");
    }

    // submit the form or notify user of errors
    if (msgs.length === 0) {  // no error messages
        getElement("form").submit();
    } else {
        displayErrorMsgs(msgs);
    }
};

const resetForm = () => {
    getElement("form").reset();

    // remove error messages if any
    const ul = getElement("ul.messages");
    if (ul !== null) ul.remove();

    getElement("#email_1").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    getElement("#register").addEventListener("click", processEntries);
    getElement("#clear_form").addEventListener("click", resetForm);

    getElement("#email_1").focus();
});
