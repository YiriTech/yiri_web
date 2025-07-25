import image1 from "../../public/assets/img/blog/blog-1.jpg";
import image2 from "../../public/assets/img/blog/blog-2.jpg";
import image3 from "../../public/assets/img/blog/blog-3.jpg";
import image4 from "../../public/assets/img/blog/blog-4.jpg";
import image5 from "../../public/assets/img/blog/blog-5.jpg";
import image6 from "../../public/assets/img/blog/blog-6.jpg";
import image7 from "../../public/assets/img/blog/blog-7.jpg";
import avatar1 from "../../public/assets/img/avatar/avatar-1.jpg";
import avatar2 from "../../public/assets/img/avatar/avatar-2.jpg";
import avatar3 from "../../public/assets/img/avatar/avatar-3.jpg";
import avatar4 from "../../public/assets/img/avatar/avatar-4.jpg";
import avatar5 from "../../public/assets/img/avatar/avatar-5.jpg";
import avatar6 from "../../public/assets/img/avatar/avatar-6.jpg";
import avatar7 from "../../public/assets/img/avatar/avatar-7.jpg";
import { StaticImageData } from "next/image";

export type blogDataType = {
    number: string,
    id: string,
    date: string,
    comment: string,
    title: string,
    image: StaticImageData,
    avatar: StaticImageData,
    name: string,
    position: string,
}[]

const blogData : blogDataType = [
    {
        number: '01',
        id: 'software-development-agility-a-primer',
        date: '10',
        comment: '2',
        title: 'Yiri Think Tank',
        image: image1,
        avatar: avatar1,
        name: 'Derya Kurtulus',
        position: 'Heating Expert',
    },
    {
        number: '02',
        id: 'ux-ui-designing-the-future-web-design',
        date: '12',
        comment: '3',
        title: 'Yiri Academy',
        image: image2,
        avatar: avatar2,
        name: 'Steve Rhodes',
        position: 'Senior Manager',
    },
    {
        number: '03',
        id: 'pioneering-contactless-payment-technologies',
        date: '13',
        comment: '6',
        title: 'Yiri Conferences',
        image: image3,
        avatar: avatar3,
        name: 'Lisa Thompson',
        position: 'Senior Engineer',
    },
    {
        number: '04',
        id: 'balancing-ai-innovation-with-ethical-standards',
        date: '15',
        comment: '7',
        title: 'Yiri Digital',
        image: image4,
        avatar: avatar4,
        name: 'David Martinez',
        position: 'Senior Technician',
    },
    {
        number: '05',
        id: 'empowering-your-business-with-it-solutions',
        date: '17',
        comment: '5',
        title: 'Yiri Research',
        image: image5,
        avatar: avatar5,
        name: 'Cansu Tuman',
        position: 'Project Manager',
    },
    {
        number: '06',
        id: 'harnessing-the-power-of-technology',
        date: '21',
        comment: '3',
        title: 'Yiri Consulting',
        image: image6,
        avatar: avatar6,
        name: 'Devon Lane',
        position: 'Technician',
    },
    {
        number: '07',
        id: 'cloud-computing-solutions-for-business',
        date: '12',
        comment: '7',
        title: 'Yiri Innovation',        
        image: image7,
        avatar: avatar7,
        name: 'Courtney Henry',
        position: 'Sr. Developer',
    },
];

export default blogData;