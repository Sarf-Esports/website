
/**
 * Super elegant fade-in animation idea by GEN3987.
 * @param {Element} node
 */
export function reveal_anim(node, {
    delay = 0,
    duration = 400
}) {
    const o = +getComputedStyle(node).opacity;

    return {
        delay,
        duration,
        css: (/** @type {number} */ t) => `opacity: ${t * o}`
    };
}