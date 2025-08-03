import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Download } from 'lucide-react';

export default function Sidebar(){
    return (
        <div className=' flex mt-2 gap-5'>
                <div className=' cursor-pointer'><a href='https://github.com/Surajsuthar' target='_blank'><Github/></a></div>
                <div className=' cursor-pointer'><a href='https://www.linkedin.com/in/surajmal-suthar-26a297203/' target='_blank'><Linkedin/></a></div>
                <div className=' cursor-pointer'><a href='https://x.com/Suraj__0067' target='_blank'><Twitter/></a></div>
                <div className=' cursor-pointer'><a href='/SURAJMAL_SUTHAR_RESUME.pdf' download><Download/></a></div>
        </div>
    )
}