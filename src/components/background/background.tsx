import styles from './background.module.scss';

function MountainLarge({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            width="500"
            height="350"
            viewBox="0 0 500 350"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M250 0L0 350H250H500L250 0Z" fill="#B9C5D1" />
            <path d="M221 95L180 98L250 0L365 161L250 120L221 95Z" fill="white" />
            <path d="M250 350V0L500 350H250Z" fill="#657F9A" fillOpacity="0.5" />
        </svg>
    );
}

function MountainTripleSnow({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            width="980"
            height="350"
            viewBox="0 0 980 350"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M275 50L0 350H275H550L275 50Z" fill="#B9C5D1" />
            <path d="M208 240L88 254L275 50L286 62L305 103L287 172L253 183L208 240Z" fill="white" />
            <path d="M241 184L275 50L550 350L374 337L255 280L208 240L241 184Z" fill="#657F9A" fillOpacity="0.5" />
            <path d="M550 0L300 350H550H800L550 0Z" fill="#B9C5D1" />
            <path d="M585 175L525 246L409.5 196.5L550 0L605 77L594 130L585 175Z" fill="white" />
            <path d="M537 350L518 186L550 0L800 350H537Z" fill="#657F9A" fillOpacity="0.5" />
            <path d="M730 100L480 350H730H980L730 100Z" fill="#B9C5D1" />
            <path d="M730 183L673 157L730 100L781 151L755 160L730 183Z" fill="white" />
            <path d="M794.5 268L747.5 212L730 100L980 350L883.5 291.5L794.5 268Z" fill="#657F9A" fillOpacity="0.5" />
        </svg>
    );
}

function MountainStandardSnow({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            width="300"
            height="200"
            viewBox="0 0 300 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M150 0L0 200H300L150 0Z" fill="#B9C5D1" />
            <path d="M120 95L90 80L150 0L189 52L171 74L120 95Z" fill="white" />
            <path d="M128 159L125 74L150 0L300 200L128 159Z" fill="#657F9A" fillOpacity="0.5" />
        </svg>
    );
}

function MountainWideSnow({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            width="500"
            height="250"
            viewBox="0 0 500 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M250 0L0 250H250H500L250 0Z" fill="#B9C5D1" />
            <path d="M250 0L393 143L253 139L214 153L113 137L250 0Z" fill="white" />
            <path d="M192 250L250 0L500 250H192Z" fill="#657F9A" fillOpacity="0.5" />
        </svg>
    );
}

function MountainStandardBorder({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            width="334"
            height="200"
            viewBox="0 0 334 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M150 0L0 200H300L150 0Z" fill="#B9C5D1" />
            <path d="M128 159L125 74L150 0L300 200L128 159Z" fill="#657F9A" fillOpacity="0.5" />
            <path d="M334 200L150 0L300 200H334Z" fill="#65809A" />
        </svg>
    );
}

function MountainDualSinglePeakSnow({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            width="680"
            height="350"
            viewBox="0 0 680 350"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M250 0L0 350H250H500L250 0Z" fill="#B9C5D1" />
            <path d="M225 246L115 189L250 0L335 119L325 116L317 134L260 173L225 246Z" fill="white" />
            <path d="M237 350L218 186.5L250 0L500 350H237Z" fill="#657F9A" fillOpacity="0.5" />
            <path d="M430 100L180 350H430H680L430 100Z" fill="#B9C5D1" />
            <path d="M484 201L430 100L602 272L484 201Z" fill="#657F9A" fillOpacity="0.5" />
        </svg>
    );
}

export function Background() {
    return (
        <div className={styles.background}>
            <div className={styles.sky} />
            <div className={styles.mountains}>
                {/* Back */}
                <div className={styles.back}>
                    <MountainStandardSnow className={styles.lefter} />
                    <MountainWideSnow className={styles.left} />
                    <MountainDualSinglePeakSnow className={styles.right} />
                </div>

                {/* Middle */}
                <div className={styles.middle}>
                    <MountainLarge className={styles.main} />
                    <MountainStandardBorder className={styles.right} />
                </div>

                {/* Front */}
                <div className={styles.front}>
                    <MountainTripleSnow className={styles.right} />
                </div>
            </div>
            {/* <div className={styles.middleground} />
            <div className={styles.foreground} /> */}
        </div>
    );
}
