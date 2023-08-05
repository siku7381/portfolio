import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide_image_1 from '../../assets/images/img_1.jpg';
import slide_image_2 from '../../assets/images/img_2.jpg';
import slide_image_3 from '../../assets/images/img_3.jpg';
import slide_image_4 from '../../assets/images/img_4.jpg';
import slide_image_5 from '../../assets/images/img_5.jpg';
import slide_image_6 from '../../assets/images/img_6.jpg';
import slide_image_7 from '../../assets/images/img_7.jpg';

const images = [
    slide_image_1,
    slide_image_2,
    slide_image_3,
    slide_image_4,
    slide_image_5,
    slide_image_6,
    slide_image_7,
]

export default function Modal({ modalOpen, toggleModal, project }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            {modalOpen ? (
                <>
                    <div
                        className="text-white justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="bg-transparent bg-slate-900 border border-red-500 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Project Details
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-red-800 border-0 text-black opacity-100 rounded-md px-3 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={toggleModal}
                                    >
                                        X
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative z-0 absolute p-6 flex-auto">
                                    <div>
                                        <h2 className="text-3xl mb-5 text-center underline underline-offset-8">{project.name}</h2>
                                        <Slider {...settings}>
                                            {
                                                images.map((item) => {
                                                    return (
                                                        <div key={item}>
                                                            <img src={item} alt={item} style={{ height: '300px', }} />
                                                        </div>

                                                    )
                                                })
                                            }

                                        </Slider>
                                    </div>
                                    <h3 className="mt-5 text-2xl">Description</h3>
                                    <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
                                    <h3 className="my-5 text-2xl">Technologies used</h3>
                                    <div className='mt-4 flex flex-wrap gap-2'>
                                        {project.tags.map((tag) => (
                                            <p
                                                key={`${project.name}-${tag.name}`}
                                                className={`text-[14px] ${tag.color}`}
                                            >
                                                #{tag.name}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="bg-transparent hover:bg-red-500 text-red-dark font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                                        type="button"
                                        onClick={toggleModal}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}