export default function PlusIcon({ selected, action }) {
    return (
        <svg onClick={action} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="869 1.999 40 40"><g data-name="Icons/Circle Plus 2"><path d="M889 2a20 20 0 0 0-20 20c0 11.045 8.954 20 20 20 11.045 0 20-8.955 20-20a20 20 0 0 0-20-20Z" fill={selected ? '#EE8820' : '#8C8684'} fillRule="evenodd" data-name="Oval 2" /><g data-name="Group"><path d="M879 20h20v4h-20v-4Z" fill="rgba(255, 255, 255, 1)" fillRule="evenodd" data-name="Rectangle 4" /><path d="M887 12h4v20h-4V12Z" fill="rgba(255, 255, 255, 1)" fillRule="evenodd" data-name="Rectangle 4" /></g></g></svg>
    )
}
