export default function CrossIcon({ action }) {
    return (
        <svg data-testid='cross' onClick={action} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.1">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.10059 0.686523L23.3138 21.8997L21.8996 23.3139L0.686372 2.10074L2.10059 0.686523Z" fill="#31211B" />
                <path fillRule="evenodd" clipRule="evenodd" d="M21.8994 0.686523L0.686211 21.8997L2.10042 23.3139L23.3136 2.10074L21.8994 0.686523Z" fill="#31211B" />
            </g>
        </svg>
    )
}
