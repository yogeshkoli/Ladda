export interface Ladda {
    start(): Ladda,
    startAfter(delay: number): Ladda,
    stop(): Ladda,
    toggle(): Ladda,
    setProgress(progress: number): void,
    isLoading(): boolean,
    remove(): void,
}

export interface BindOptions {
    /**
     * Number of milliseconds to wait before automatically cancelling the animation.
     */
    timeout?: number,

    /**
     * A function to be called with the Ladda instance when a target button is clicked.
     */
    callback?: (instance: Ladda) => void,
}

/**
 * Creates a new instance of Ladda which wraps the target button element.
 */
export function create(button: HTMLButtonElement): Ladda;

/**
 * Binds the target buttons to automatically enter the loading state when clicked.
 * @param target Either an HTML element or a CSS selector.
 */
export function bind(target: HTMLElement | string, options?: BindOptions): void;

/**
 * Stops all current loading animations.
 */
export function stopAll(): void;
