/**
 * waitForElement():
 * A modern replacement for waitForKeyElements using MutationObserver.
 * 
 * Example:
 *   waitForElement("div.comments", (el) => {
 *     el.text("Comment found and updated!");
 *   });
 *
 * @param {string} selector - jQuery selector for the desired element(s).
 * @param {function} callback - Function to call when elements are found. Receives a jQuery-wrapped element.
 * @param {boolean} [once=true] - If true, stops observing after first match.
 * @param {string|Element|jQuery} [root=document] - Optional root or iframe selector to observe within.
 */
function waitForElement(selector, callback, once = true, root = document) {
    const $root = (root instanceof $) ? root : $(root);
    const targetNode = $root[0] || document;

    // Helper function to handle found elements
    const handleFound = ($elems) => {
        $elems.each((_, el) => {
            const $el = $(el);
            if (!$el.data('waitForElementFound')) {
                $el.data('waitForElementFound', true);
                callback($el);
            }
        });
    };

    // Initial scan in case elements already exist
    const initialMatches = $(selector, $root);
    if (initialMatches.length) {
        handleFound(initialMatches);
        if (once) return; // Stop early if we only care once
    }

    // Set up the observer
    const observer = new MutationObserver(() => {
        const matches = $(selector, $root).filter(function() {
            return !$(this).data('waitForElementFound');
        });

        if (matches.length) {
            handleFound(matches);
            if (once) observer.disconnect();
        }
    });

    // Observe subtree changes
    observer.observe(targetNode, {
        childList: true,
        subtree: true
    });
}
