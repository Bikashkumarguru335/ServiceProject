import React, { useState, useRef, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './home.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Dialog, Button, DialogContent, DialogActions } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import Navbar from '../Navbar/navbar'
import Spa from "../../images/spa.png"
import Barber from "../../images/barber.png"
import Ac from "../../images/icons8-air-conditioner-100.png"
import Clean from "../../images/clean.jpg"
import HomeRepair from "../../images/homeRepaire.jpg"
import WaterPurifiers from "../../images/waterPurifier.jpg"
import SmartLock from "../../images/smart-lock.png"
import Cooks from "../../images/cook.png"
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import Diversity3TwoToneIcon from '@mui/icons-material/Diversity3TwoTone';
import Manicure from "../../images/manicure.jpg"
import Pedicure from "../../images/pedicure.jpg"
import Waxing from "../../images/waxing.jpg"
import Threading from "../../images/Threading.jpg"
import hairTreatment from "../../images/hairTreatment.jpg"
import StressRelief from "../../images/stressRelief.jpg"
import NaturalSkin from "../../images/naturalSkinCare.jpg"
import Cleanings from "../../images/cleaning.jpg"
import Sofa from "../../images/sofa.jpg"
import AcR from "../../images/AcRepair.jpg"
import Fan from "../../images/fanRepair.jpg"
import TapRepair from "../../images/tapRepair.jpg"
import JetSpray from "../../images/jetSpray.jpg"
import Toilet from "../../images/toilet.jpg"
import PostWorkout from "../../images/painRelief.jpg"
import Massage from "../../images/massage.jpg"
import Haircut from "../../images/haircut.jpeg"
import Pedicures from "../../images/pedicure.jpeg"
import Facial from "../../images/facial.jpeg"
import HairColor from "../../images/hairColor.jpeg"
import About from '../About/about';
const Home = () => {
    const navigate = useNavigate();
    const acRepair = () => {
        navigate("/ac-repair")
    }
    const womenSaloon = () => {
        navigate('/parlour')
    }
    const messageWomen = () => {
        navigate("/massageWomen")
    }
    const massageMen = () => {
        navigate("/massageMen")
    }
    const Cleaning = () => {
        navigate("/bathroomKitchenClean")
    }
    const RepairingHome = () => {
        navigate("/electrician")
    }
    const WaterPurifier = () => {
        navigate("/waterPurifier")
    }
    const smartLock = () => {
        navigate("/lock")
    }
    const Cook = () => {
        navigate("/cook")
    }
    const categories = [
        {
            id: 0,
            name: "Women's Salon & Spa",
            img: Spa,
            onClick: womenSaloon,

        },
        {
            id: 1,
            name: "Men's Salon & Massage",
            img: Barber,
            onClick: massageMen,

        },
        {
            id: 2,
            name: "AC & Appliance Repair",
            img: Ac,
            onClick: acRepair,

        },
        {
            id: 3,
            name: "Cleaning",
            img: Clean,
            onClick: Cleaning,

        },
        {
            id: 4,
            name: "Electrician, Plumber & Carpenter",
            img: HomeRepair,
            onClick: RepairingHome,
        },
        {
            id: 5,
            name: "Native Water Purifier",
            img: WaterPurifiers,
            onClick: WaterPurifier,

        },
        {
            id: 6,
            name: "Native Smart Locks",
            img: SmartLock,
            onClick: smartLock

        },
        {
            id: 7,
            name: "Cook",
            img: Cooks,
            onClick: Cook,

        }
    ];
    const cards = [
        {
            id: 1,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbyK2Iohyashmd80lnSGxUda-WXudRN41k6w&s",
            onClick: womenSaloon,
        },
        {
            id: 2,
            img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1720173604045-456ebe.jpeg",
            onClick: acRepair,

        },
        {
            id: 3,
            img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_37,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1652853823570-152440.png",
            onClick: acRepair,

        },
        {
            id: 4,
            img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1726138805913-db2e0e.jpeg",
            onClick: Cleaning,

        },
        {
            id: 5,
            img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1701759875987-8b654d.jpeg",
            onClick: womenSaloon,
        },

    ];
    const newServe = [
        {
            name: "Native Water Puurifier",
            img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_131,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1737357806491-4470a2.jpeg"
            , onClick: WaterPurifier
        },
        {
            name: "Bathroom & Kitchen Cleaning",
            img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_131,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1681371120474-301f47.jpeg"
            , onClick: Cleaning
        }
        , {
            name: "Hair Studio For Women",
            img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_131,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1651040420198-fe6d1d.jpeg"
            , onClick: womenSaloon
        }
        , {
            name: "Ac Service & Repaire",
            img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_131,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1652853823570-152440.png"
            , onClick: acRepair
        }
        ,
        {
            name: "Personal Cook",
            img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_131,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1652853823570-152440.png"
            , onClick: Cook
        }
    ]
    const forWomen = [
        {
            id: 1,
            Title: "manicure",
            img: Manicure
        }, {
            id: 2,
            Title: "Pedicure",
            img: Pedicure
        }, {
            id: 3,
            Title: "Threading & face Waxing",
            img: Threading
        }, {
            id: 4,
            Title: "Hair Care",
            img: hairTreatment
        }, {
            id: 5,
            Title: "Waxing",
            img: Waxing
        }
    ]
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 2000, min: 1400 },
            items: 4,
            // slidesToSlide: 3 // optional, default to 1.

        },
        desktop: {
            breakpoint: { max: 1400, min: 800 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 800, min: 500 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 500, min: 0 },
            items: 1
        }
    };
    const spaWomen = [
        {
            id: 1,
            title: "stress relief",
            img: StressRelief
        },
        {
            id: 2,
            title: "pain relief",
            img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_135,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1700143539186-26f4e5.jpeg"
        }
        , {
            id: 3,
            title: "Natural skincare",
            img: NaturalSkin
        }
    ]
    const cleaning = [
        {
            id: 1,
            title: "Bathroom & kitchen cleaning",
            img: Cleanings,
        }, {
            id: 2,
            title: "sofa & carpet cleaning",
            img: Sofa
        }
    ]
    const repair = [
        {
            id: 1,
            title: "Ac Service & Repair",
            img: AcR
        }, {
            id: 2,
            title: "Washing Machine Repair",
            img: "https://5.imimg.com/data5/SELLER/Default/2022/2/LC/FE/OD/25289616/washing-machine-repairing-services-500x500.png"
        }
    ]
    const quickService = [
        {
            id: 1,
            title: "Fan repair(ceiling/wall/exhaust)",
            img: Fan,
            charge: 100,
            onClick: RepairingHome
        },
        {
            id: 2
            , title: "Tap Repair",
            img: TapRepair,
            charge: 50,
            onClick: RepairingHome

        }, {
            id: 3,
            title: "Switch Box Installation",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ59HQ4PAe545tohzl5Iz8lYqNI2P1UDNJLvw&s",
            charge: 250,
            onClick: RepairingHome

        }, {
            id: 4,
            title: "Jet spray installation/repair",
            img: JetSpray,
            charge: 50,
            onClick: RepairingHome

        }, {
            id: 5,
            title: "Toilet seat cover replacement",
            img: Toilet,
            charge: 80,
            onClick: RepairingHome

        }, {
            id: 6,
            title: "Switch/Socket replacement",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRldbdQQoMItDnNvHpXPn_pI_IscyatvU5EPA&s",
            charge: 50,
            onClick: RepairingHome

        },
        {
            id: 7,
            title: "Connection hose installation",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuXKBLVNim0s5XjLF0EuksYYI1i9y83kMb9w&s",
            charge: 80,
            onClick: RepairingHome

        },
        {
            id: 8,
            title: "Wifi cctv installation",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaNtE7pu3cLjR5WJL1By0hS342EU11JAy0oA&s",
            charge: 250,
            onClick: RepairingHome

        }, {
            id: 9,
            title: "Inverter installation",
            img: "https://5.imimg.com/data5/SELLER/Default/2023/7/328601062/ES/FW/JR/5341726/inverter-battery-installation-service.jpg",
            charge: 369,
            onClick: RepairingHome

        }
    ]
    const massage = [
        {
            id: 1,
            title: "Pain Relief",
            img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIVFRUVFxUVFRUVFRUWFRUVFxUWFxcVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0dHR0tLS0rLS0tLS0tLS0tKy0tLS0tKy0tNS0tKy0tLS0tLSstLS0tKystLS0tLS0tLS0tLf/AABEIALgBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAIFAAEGBwj/xABAEAABAwIDAwkFBgUDBQAAAAABAAIDBBEhMUEFElEGEyJhcYGRobEHQsHR8BQyUmJysiNDgsLhJHOSFzRT0vH/xAAaAQACAwEBAAAAAAAAAAAAAAAAAwECBAUG/8QAJREAAwACAgICAgMBAQAAAAAAAAECAxESITFBBDIiUUJSYXEj/9oADAMBAAIRAxEAPwD0x+aNEgPzRYVAD8SLDmgxIsOakBoLaiAtoAqOU+xBVRbvvtxYevVt+BXku0Inxu3HggtOF8PFe4hc/wArOTTaphcywlAw4O6j19aXkjkh+HLwffg8xhd/lMxOS08LoiWuBa5vRcCLEEZFHpTfBY6WmdGaTWxtuIS8sacbYBAlKpsshHm1B8Sb3Vt8WCNljpeSvK3m2iGouWDBjxiWjg4Zkdea7ilro5BeORjuxwv4ZheQwxptsSdOdrp9mXJ8Wae10el7dr+Yhc8Ebx6LL/iOvdie5cbDtaqYd4SucPzHeHgfgqWRhIsSSOBy8EuyR8RBabt1aeH5eCKzNv8AROP4ylafZ2I5XzAYxsJ/qHldDk5TVDst1nY353VK2dr27zTlmNR1EaIjDcYFSslP2VeKV6G5dt1B/mu7rD0VdU1kzr3kce1xW5WrTpGgYlVdP9gpleisMRtcuO8PqyxtVK02a92HWiVM7bZ4eiTfM3VyjstpMsWco6qM7wlNrZHLLzTEftCqQ0XA7ejc+S5errgbgG6rmyHE6cFZXS9lXjl+j0j/AKg85E6N8ZDnNc3eBBzFr2wXmjNrTAkvGDfMDVOMe0tuD/hL729gWgh2d/8ACHk39iFj4/U6SKTnI2vGoutRyWHWg0PQaBww7BfBY/MqiGvwPtnBFjiMktT0EUZLmNAJSxfb64IhffvU7Jljk7rjFINcQcs0cuwsobl8VGyzRK54rajzXasQRo9JkOKJCUOTNEiW85A9EUWI4peIorDipAcBW7oQK3dABAVveQrrd0AVXKLYLKpujXgWDuI4O+ei87qdnvp5Cx4xHnwI6l60CuR5aVUTnMa0XkZe50aDoeJ9EnNK47Zp+PdcuKOWaCc1jmom6tFiwbOkkAt1KbGqYjWxEVDoaoNNYEZrUNuCfhjuq8iXGhUsSszFZyMSUijkCkQbIY3bw7xo4cCrhkI+8L2OKUjpucO63vOgCtquzQBll4BMhicqW0hCaQD4Kq2hjjeyBtTaIaSb8fS/w81zO1eUO9g3H08U1diWtD9U57wWwNc62JLRcpmi5CbRli55rWkHJpkaHuHEDLxIKoNlbafGcDb0PavReSXK8MdwB+82+B6xfX6unzM+xOR15Rwdds+opzaeCSPH3mkA9hyPcUEODtbdWS+i45oqiPJr2OFi1wuOxzSuK2/7NYpCX0rubP8A433MZ/Sc2eY7FasX6FTn9UeZNdcbowRojpbL4ZpjavJ+emNpYnNA977zD2PGHikgev5LO5aNKpPwWUUhJuOrC+iZcdDgclX0bxrpqndp1jN9oyL8usgXt229ESiWyTyMEJsmKi5wIQ2DFDQKiwc/AIkJuCkwdEakfp1qjGy9ocCxTF1ijYHfSZokRQ5c0SErpHGHYkaLNChKPFmpAOAFuy2Ct3QBGwWdykuf2/yjbG0shcHSHC4xDOu+pVapStstMOnpEeUW3hHeKL7/ALzvwdQ/N6Ljyy+Jz1PWpNPHPrzU2uuufkyOmdPFiULSBiIqYiTEYRtzBIbNUiYjW+bRSsa0lKdGqZAPjUGvLcvBMPbZLSlUdD5hMekaHNu1c1tFsm+1g98hoOmOqvdnzWdunI+qLtGkviMxiD1qy77Fr/zrTA0FTFC3dGfE5uI1PX1Ki27tsXDW9JxyaMz8gh10LnvsTuk+9p4cUxs3YrIyX33nHNxxP+E5X6E5Mcz+XtnJ12zpXdJ5/pGQVUdnFei1sAXOVkFjdNnI/BlqUznm0lkzCC1PEIL2pyexLWjpOS/K2WmeL9JmTmk5j5r2igq2TRtljN2uFwfgetfOjGru/Zxyk5mT7PIf4ch6JOTH6dxyTseTvTM2bFtbR6s5oIsRcLlttchaWa7mN5l51YOjfrZl4WXVlRJWhpPyY02vB4vtfkhVUt3bnORj347mw/M3MenWqhs17XANsrgG3ivf2lUe2eSNLU3cWbjz78fRPeMik1h/qaJ+R/Y8jIuLjvCFHndddtPkFURXMREreAwf/wATn3ErlKuF8TiHtc06hwII7ilOWvI1VL8AauS2PDFHpqgEgjIgFI1MlxZB2TIb83mb9EcQ7Tx9UtyOmuzqRKtLvNm7MbHExhYCQMSRiTmfO62mr4r/AGJfylvwHlzRIQhS5okK0mEfhR4s0vCm42qQDBCq6psTS97g1o1+A4lTe8NBc42ABJPADMrz3bG03VMm9juC+43gOJ6yl5MnBDcWJ2/8G9t8onTtLGN3WdvSd2206lRRxlMbuCxhWKqdds3zKlaRuONMRtQmFGjKW0MTCtRAghym16VSHQzHNWR5qZKHfFKZql7Rk7FXShW0zgQqudUY/DX7F3HyVtSVIe3HPXtVK96hRVe6+2h9VM9Fs8qp/wCFnW0wKSY0twTj6i4ScsoTkkc909aYOdypa9itJ5FVVbkxCWypcLKBCLIttanJi2DbgotkO8LZorgkw+0rf0u9Qror/h7vyJ219ppmkm74+g/jhk7vHoVfFeLcjdtmknDif4b+jIOo69ozXtANxcG4OIPELXivkjBmx8KMbdTUGqaYJNql5W7EFXTuZYc40b0btQ4e7fgcv/iuViglPR861FM9riwtO9fd3bYg8LcV3nIzkhzRFROBzmbG/g6z+b0Xb18MT3h3NsLx/M3RvdgdmoKs40nsZWVtaNrFpYmChSbNEhQ5s0SFVAehCcjCThCbjCAKXlrVFlOGA4yODT+kYn0HiuQgar/l87pQD9Z/aFQROWLO92b8C1ARyhZYVu+KUOJAIhdYKAOt0rU1VkMEMmZSbPiqF9amKao1Smh0svTIgPlSnPoL5lRyOi9Fnz1wkpnoDZ0GWZU4DVk0RlkSFRLYqcsiQnerqCXmLqlrLhalmVHT1FnDrwT8zlfjozU9hHzJOpQpJVB0l1dIU2BGaI4WQgcVJ0ivopsgSq2rdaaPsPqE84qnfJvVH6bD4/FMS6KbOjaF6z7Ptrc9T8249OGzTxLPdPw7l5Q0dFPbA2u6lmbK3LJw0c3UKcV8WVzRzk9yAUrJagqWSxtkYbteAQfh2qdRO1gxz0HFbTnBXuAFybBV9TVF2DcB5lAkkLjcnu0Cip0BlliisJUgbW1C6xQACfNThUZhipxBVAdhTkdkpCm2FAHIcv8A78P6X+rVQRldP7QouhC8aOc3/kL/ANq5SIrFm+5vwP8ABDDXIbzis3kJzkocSmmsFVVVQi1kuCoaqpxULsnwGEl3KzhdYKmpcSreI4IZKYzzpUS9astEKuidkXSITplkiUcbFSkTyCTyZpCUpmdL2VkiOQvObY8FbQu3mg9SqZsimdky9GyGuiFROVqC1NThJPNihIGTIQXBS5xRJV0ijAylUuzDvSOP5j6q6qBgqfYLcb9ZV14Ke0dXEMEOQJmFuCe2Lsz7RM1lujm88Gj55JaTb0hnJJbZ1PszrpWskY5pMWbCcLP1A6vkurcbkk5qNPTtY0NaAABYAZAIhA4LoTPFaOZdcq2RBWipXCg9WKkSVEuWnOQi5AE99bQt9aQAabNTiQ5s0SJUJHoSm2FKQpthKkgq+V9Pv0kmGLbPH9Jx8rrz2nevWJGbzS1wwcC09hFivJZIjFI+J2bHFp7jn8Vm+QvDNfxq6aCuKC+6Ldbc1ZjUVNXiuW2xdnSGQz7F2NUxc/tKC4KJfZLXRDZslwCriB65XYUu6XRn3Tbu08l0bHIpdhL6HmuWpChB6G6RRoNm5H2SmZW5ZFqNWIN1LkBhwWqiRDaUaJISKFG+zrIjwlxg5W9BotJXJOUJhrroUrVVEtChNlJrlt7VFoV0UZGqPRPYqvYQsrZ2NtersW207XdNgsR95vxCuvBRlrT4gL1Dk5s8QwtG7ZxALjqSeK4zkHs8SSF7h0Y7d7tPBejXTsMfyM2e/wCJIlRLlolQLk8zm3OUC/jiouegPkOSACPehF6HvYrHlSBsyLEAyBbQA/NmiRIc+anElgPwpxiShTbApAOLrgvaDs/clZOBhINx/wCtowPeP2ruwFUcr6bfpJeLQHjqLTf0uO9UyTuWMxVxpHnsBRZDgl6Upp+SwHRKyqeqqrbdW1SFVVKhFjlqs83O1+juie0ZfHwXSUrt4XXP7eZ0CdWkHzx8iVabDn3mBNpdbFrzotSUJxR91b5tULCm6hSPTUzUnIEEoA7EpqOLBQgixTzY8FWqGxGxKVqTe3FWkjEkWY96jmOWEZp2rczEzBHgtyRKivstWHRVuah7qclYlyE9MzXGjpvZxsRlVPKJBdrYnDse8gNcOsAOXPbc2bJSVDmOFi026iND2EL0f2PU1mVEn4nMaP6Q4n9wV7y15MxVbWvd0XMIufxMvi0/BaJjcrXkwvLxyNPwI8m6FsMDQBiRvO63FWhKFELAAZDAKRctSWjG3t7MJQnOWOd4obnaIA046oJdr9WU3G+GiE52PZ6oA0XW7T9WWE5D661Fp18PmtA2F+PopAgWrFLmuJxWkAWc2anEoTZqUSWA9EmmJKIpthUgGCrOU77Ukx/LbxIHxVkCFUcr3AUcvY39wUPwWn7I84on5Kwc7BVdIcE26WwXNR1GKVjs1T1T09VzKpqHqUiSs2mLscOIPog8nJrWCNVHRLQQGN1xiNCMk5LoS3pnaQkWUnKto6sWzTZqAlNF9kZUs5qM+QFRaFDGSThYmN1ZTNTbmpF0bsMdlXXSbjC7w7UrSi7QetX1Dszn5Lu+4zwLjib9gt4re36FkdiwAY5DAZHRL5dG5TPLiAp48ApSxrdK64RnNVFXYy8a0VM0aSe1W1QxJOZitUM5ueNHrXs2pdyiafxuc70b/ar/AGnbmnX+jfBK8mIdykhb+QHxx+KV5QTO32sAwtc+K6sLpHnMj3TYqHLTnIZcAoOeriybnaoZNgtEqO9rw9VJJp501+KG85NH1xKkDqe5Q3rDrPooAw44afBZmb6D10Wt22Gpz+S28e6PH1KANdI4hYouqrYDILEAWs2alEoz5qUSoA7Cm2AJSEpxhUgEAC53l++1G4fic1vqfguiDlyvtJf/AKZg4yjya5Vt/iy+NbtHAUzkaV+CVpjomXMFlzjqFZUC6rKnBXFRYKnq3K0kMrKh2Pal5mEA7ri0+AI9PFFfcuFus+Aug1cTwbb+Fr5AjFPkTQxRRSuyeB2j5Jtjaj3d13XcjyVRTxSg/wANw7MgVbUlbUM+9A4jiyx8lDRedewg+0axOPYR80djpx/Jf5fNWlBWlwBLHDtaR6qziffvSq0PlFNRyyuwETvIfFX9DsyV9t/ojxPdoisgaCDkrBjiACHeaz1KNcZWvA7BRtiZuswzzxJJzJK5rlMDug9ea6H7ThiqDbhLmOSq0a/jp7bZW7PlT7nKmoHqzc64S9dmxvohKUGOHee1vEhTkcjbHkBnj6nN8itWJdnM+VXTPa6eMMY1ujWgeAsqDa1UC+4GXRHqrjaUtmWvi7Du1VLMzXuXYR5YSbxIzWjxRZCNOxCLdOGasQQINu36Ci7Ro+uJU75lDLrC9s/RQSaOJtoFoHpXOQ9VF2VtT68FvdODR9cSgCQ/GewfNDkfutucz6I7m3w0CTnlGLnZN9dEAbbTt97PVYkIpHvAcDgcliAOpnzUolqfNbjVCR2FNsulYU0xSQFBK5P2lf8Abx/7o/a5dYAVyvtIH+mZ/ut/Y9UyfVjMX3R59TBNPbgkoX4prnMFzzpldVqlrHK3q5M1S1blaSGD2RAXymwvuse49mA/uQJZukGbotkLkjiQAdMfVdn7IKQSVc+8Lt+yyNP9ckf/AKlc/t+iiEjty+BzJ1utKXWzM3+WihFSI3Yhw/pJt3hX+y9vRnAOBPaL+CrJKwh9yBawwVrSV0Ls2N7bAqtaGy2Wjq65wsbp2kqAM1SmRl8DYaHh28E6ycWsbEfiGKSx+0XT5cM8FFlRbA9qrPtJAGF26HMIBluDj4JNLY7HWi9dXXQKyoBa7sXPxucTfe9UeSR27bilcDdGVJCNJNYq1E2C5xzi15BVjFPgp4EvP0NyTIVPUljw4cQl3SI9DDvuBOQTZWjFkvkd/PykMk8LsmMaGHrLgN93kPBdMSD2H6uvNGldLsHbYAEUpsMmOP7T81rwZtvVezl/IwaSc+i9kjsfRAcPEpwnQ5IEjNfodq2GEXLcbaBDfib6D10RXMNu1R5siw+rqQAMB+94I8bbAuOZ9FtwGA0CFPOPD6CCSMku6LanP4Bc5t2pOEYPb8U3VV9nb3D1XP7Snu4u45KAHYq1wAAyGAWJKCva1oabXC0gk9OmzUolixUAdhCaY1bWKSAgauR9pT7QRN4yX8GO+a2sS8v0Y3D90edE2KJzi2sWA6RX1js1R1r1ixXkrR6N7Dqbo1kxy/hxjuD3O/c1eecpKcGV1uJ161ixaX9UZJ7tlVHA0jdffDKxIwR6bZELv5jgeolYsVNvQ9JMvIIo4wGklzeOZ8VMsZe7HddsitrEtjH0BFUQOjcceH+ECWq3s+/DwWLFXRKpjNNV3wAt1pxh4m6xYltDpp6Mmp2vsPO6TfSubliNCFixWkrVNA2C5sugpY91tlixRZEvYRz7LW+sWKqJZcbK5Qui6El3x8feb2cR1LqKeqa9ofG4OadR9eSxYtvx8jfTOf8AJxyvyRpzxnkfL/CA+QjE65HS3atLFrMgu+p3Rjjf6CrNoVZaLDH58FixQBRV1TvCwz17dSue23tbmA0AXJ45AcVixQyyKkVe9icScbrFixU2W0f/2Q=="
        }, {
            id: 2,
            title: "Post Workout",
            img: PostWorkout,
        }, {
            id: 3,
            title: "Stress relief",
            img: Massage
        }
    ]
    const salon = [
        {
            id: 1,
            title: "HairCut & Bread Styling",
            img: Haircut
        }, {
            id: 2,
            title: "Facial & CleanUp",
            img: Facial
        }, {
            id: 3,
            title: "Pedicure & Manicure",
            img: Pedicures
        }, {
            id: 4,
            title: "Hair color & Hair Spa",
            img: HairColor
        }
    ]
    // testing 
    // const dialogData = [
    //     {
    //         id: 0,
    //         title: "Women's Salon & Spa",
    //         images: [
    //             'https://cdn-icons-png.flaticon.com/128/1005/1005735.png',
    //             'https://cdn-icons-png.flaticon.com/128/5662/5662383.png',
    //             'https://cdn-icons-png.flaticon.com/128/4352/4352961.png'
    //         ],
    //         names: ['bikash', 'kumar', 'guru']
    //     },
    //     {
    //         id: 1,
    //         title: "Men's Grooming",
    //         images: [
    //             'https://cdn-icons-png.flaticon.com/128/1005/1005735.png',
    //             'https://cdn-icons-png.flaticon.com/128/5662/5662383.png',
    //             'https://cdn-icons-png.flaticon.com/128/4352/4352961.png'
    //         ],
    //         names: ['john', 'smith', 'doe']
    //     },
    //     {
    //         id: 2,
    //         title: "Spa Treatments",
    //         images: [
    //             'https://cdn-icons-png.flaticon.com/128/1005/1005735.png',
    //             'https://cdn-icons-png.flaticon.com/128/5662/5662383.png',
    //             'https://cdn-icons-png.flaticon.com/128/4352/4352961.png'
    //         ],
    //         names: ['alice', 'bob', 'carol']
    //     },
    //     // ➕ Add more dialogs here
    // ];

    // const [openDialogId, setOpenDialogId] = useState(null);


    // const activeItem = categories.find(item => item.id === openDialogId);

    return (
        <div className='Home'>
            <Navbar />
            <h1 className='heading'>
                Home services at your
                <br />
                doorstep

            </h1>


            <div className='webBody'>
                <div className='Description'>
                    <p className="services">What are you looking for?</p>
                    <div className="category-grid">
                        {categories.map((category) => (

                            <div key={category?.id} onClick={category.onClick}
                                className="category-card">
                                <img src={category?.img} alt={category.name} />
                                <p>{category.name}</p>
                            </div>
                        ))}
                    </div>

                </div>

                <div className='primaryImg'>
                    <img onClick={womenSaloon} src='https://images.squarespace-cdn.com/content/v1/56bb80c92b8ddea8e938f189/464f16a0-2803-41c5-a1bf-cdf39b8e0c58/Screen+Shot+2023-05-10+at+2.35.49+PM.png' />
                    <img onClick={massageMen} src='data:image/jpeg;base64,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' />
                    <img src="data:image/jpeg;base64,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" alt="" />
                    <img src="data:image/jpeg;base64,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" alt="" />
                </div>
            </div>

            <div className='Ratings'>
                <div className='totalRating'>
                    <div className="ratingDetails">
                        <StarOutlineOutlinedIcon sx={{ fontSize: "60px" }} />
                        <p>4.8</p>
                    </div>

                    <p>Service Rating</p>
                </div>
                <div className='totalCustomer'>
                    <div className='ratingDetails'>
                        <Diversity3TwoToneIcon sx={{ fontSize: "60px" }} />
                        <p>12M+</p>
                    </div>
                    <p>Customers Globally</p>
                </div>
            </div>

            <div className="carousel-container">
                <Carousel responsive={responsive} className="carousel">

                    {cards?.map((card) => (
                        <div key={card.id} onClick={card.onClick} className="card">
                            {/*  */}
                            <img src={card.img} alt="Ac Card" className="card-img" />

                        </div>

                    ))}
                </Carousel>



            </div>

            <div className="newServices">
                <h1>New and Worthy</h1>
                <div className="newContainer">
                    {
                        newServe.map((newCome) => (
                            <div className="newBox" key={newCome.name}>
                                <div className="newCard">
                                    <img src={newCome.img} alt='new to website' className='card-img' />
                                </div>
                                <h3 className='newserviceTitle'>{newCome.name}</h3>
                            </div>

                        ))
                    }
                </div>
            </div>

            <div className="mostBooked">
                <h1>Most Booked Service</h1>

                <Carousel responsive={responsive} className="newServe" >
                    {newServe.map((card) => (
                        <div className='containerCard' key={card.name}>
                            <img src={card.img} alt={card.name} className="newCard-img" />
                            <div className="mostBooked-ratings">
                                <h3 className='newserviceTitle'>{card.name}</h3>
                                <div className='TotalRatings'>
                                    <StarOutlineOutlinedIcon />
                                    &nbsp;  4.78(2M)
                                </div>
                                <p className='mostBookedPrice'>&nbsp; ₹422</p>
                            </div>

                        </div>
                    ))}

                </Carousel>


            </div>
            <div className="smartLockBanner">
                {/* <img src="https://iq7.in/img/banner2.jpg" alt="" className="smartLockBannerImg" /> */}
            </div>
            <div className="forWomen">
                <h1>Saloon for Women</h1>
                <Carousel responsive={responsive} className='womenSaloonContainer' >
                    {
                        forWomen.map((women) => (
                            <div className="womenSaloonBox" key={women.id}>
                                <p className='serviceTitle'>{women.Title}</p>

                                <div className='imageSection' onClick={womenSaloon}>
                                    <img src={women?.img} alt="" className='womenSaloon' />
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
            <div className="spaForWomen">
                <h1>Spa for Women</h1>
                <div className='spaForWomenContainer'>
                    {
                        spaWomen.map((item) => (
                            <div className='spaWomenBox' key={item.id}>
                                <p>{item.title}</p>
                                <div className="imageBox" onClick={messageWomen}>
                                    <img src={item.img} alt="" className='SpaImg' />
                                </div>
                            </div>

                        )


                        )
                    }
                </div>
            </div>
            <div className="cleaningAndPest">
                <h1>Cleaning & pest control</h1>
                <div className="cleaningContainer">
                    {
                        cleaning.map((clean) => (
                            <div className='cleaningBox' key={clean.id}>
                                <p>{clean.title}</p>
                                <div className="cleanImgBox">
                                    <img src={clean.img} alt="" className='cleanImg' />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="aquaGardBanner">
                <img src="https://5.imimg.com/data5/SELLER/Default/2022/8/GO/GG/YK/158495895/clasic-d4-jpg-500x500.jpg" alt="" className="aquaGardImg" />
            </div>
            <div className="repair">
                <h1>Appliance Service & Repair</h1>
                <div className="cleaningContainer">
                    {
                        repair.map((repair) => (
                            <div className='cleaningBox' key={repair.id}>
                                <p>{repair.title}</p>
                                <div className="cleanImgBox">
                                    <img src={repair.img} alt="" className='cleanImg' />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="quicHomeRepair">
                <h1>Quick home Repairs</h1>

                <Carousel responsive={responsive} className="newServe" >
                    {quickService.map((card) => (
                        <div className='containerCard' key={card.id} onClick={card.onClick}>
                            <img src={card.img} alt={card.title} className="newCard-img" />
                            <div className="mostBooked-ratings">
                                <h3 className='newserviceTitle'>{card.title}</h3>
                                <div className='TotalRatings'>
                                    <StarOutlineOutlinedIcon />
                                    &nbsp;  4.78(2M)
                                </div>
                                <p className='mostBookedPrice'>&nbsp;₹{card.charge}</p>
                            </div>

                        </div>
                    ))}

                </Carousel>

            </div>
            <div className="menMassage">
                <h1>Massage For Men</h1>
                <div className='spaForWomenContainer'>
                    {
                        massage.map((item) => (
                            <div className='spaWomenBox' key={item.id}>
                                <p>{item.title}</p>
                                <div className="imageBox">
                                    <img src={item.img} alt="" className='SpaImg' />
                                </div>
                            </div>

                        )


                        )
                    }
                </div>
            </div>
            <div className="bathroomCleanBanner">
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_818,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1698216901117-d92940.jpeg" alt="" className="bathroomCleanImg" />
            </div>
            <div className="saloonMen">
                <h1>Salon for kids & men</h1>
                <div className='spaForWomenContainer'>
                    {
                        salon.map((item) => (
                            <div className='spaWomenBox' key={item.id}>
                                <p>{item.title}</p>
                                <div className="imageBox">
                                    <img src={item.img} alt="" className='SpaImg' />
                                </div>
                            </div>

                        )


                        )
                    }
                </div>
            </div>
            <About />

        </div>
    )
}

export default Home;