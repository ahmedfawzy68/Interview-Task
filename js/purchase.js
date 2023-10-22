function toggle(checkbox) {
    var label1 = checkbox.parentNode.nextSibling.nextSibling; // Get the next sibling span element
    var label2 = checkbox.parentNode.previousSibling.previousSibling; // Get the previous siblings element

    if (checkbox.checked) {
        label1.style.color = 'black';
        label2.style.color = '#aaa';
    } else {
        label2.style.color = 'black';
        label1.style.color = '#aaa';
    }
}