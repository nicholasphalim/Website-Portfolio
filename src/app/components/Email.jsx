import Link from "next/link";
import Contacts from "./Contacts";

export default function Email(){
    const emailAddress = 'nicholashalim28@gmail.com';
    const subject = 'Inquiry from Website';
    const body = 'Hello, \n\nI would like to know more about...';

    const href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return(
        <Contacts href={href} src="/gmail.svg" alt="Gmail Icon"  width={30} height={30}/>
    );
}