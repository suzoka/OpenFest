export function setTabIndexForChildren(ref, tabIndex) {
    if (ref.current) {
        const focusables = ref.current.querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        focusables.forEach(el => el.tabIndex = tabIndex);
    }
}