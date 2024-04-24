import {reactive} from 'vue'

export const store = reactive({
    footerBrands: [
        {
            iconBrandTheme: 'fab',
            iconBrandName: 'instagram',
            src:'#'
        },
        {
            iconBrandTheme: 'fab',
            iconBrandName: 'facebook-f',
            src:'#'
        },
        {
            iconBrandTheme: 'fab',
            iconBrandName: 'x-twitter',
            src:'#'
        },
        {
            iconBrandTheme: 'fab',
            iconBrandName: 'youtube',
            src:'#'
        },
        {
            iconBrandTheme: 'fab',
            iconBrandName: 'linkedin-in',
            src:'#'
        },
        {
            iconBrandTheme: 'fab',
            iconBrandName: 'tiktok',
            src:'#'
        },
    ],
    footerServices:[
        {
            name: 'Marketing Plan',
            src: '#'
        },
        {
            name: 'Sales Development',
            src: '#'
        },
        {
            name: 'Digital Marketing',
            src: '#'
        },
        {
            name: 'Pricing',
            src: '#'
        },
        {
            name: 'Why Us',
            src: '#'
        },
        {
            name: 'Case Studies',
            src: '#'
        }
    ],

    footerResources:[
        {
            name: 'Learning Center',
            src: '#'
        },
        {
            name: 'Video Tutorials',
            src: '#'
        },
        {
            name: 'Customers',
            src: '#'
        },
        {
            name: 'Blog',
            src: '#'
        },
    ],

    footerCompany:[
        {
            name: 'Who We Are',
            src: '#'
        },
        {
            name: 'Contact Us',
            src: '#'
        },
        {
            name: 'Careers',
            src: '#'
        },
    ],

    footerCredits:[
        {
            contact: 'Call Us (555) 802-1234',
            src: '#'
        },
        {
            contact: 'info@yourcompany.com',
            src: '#'
        }
    ]
})