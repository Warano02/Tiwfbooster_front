import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import Subscribe1 from './news/Subscribe1'

function Footer1() {
    return (
        <div>
            <footer className="border-t-0.8 shadow  px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
                <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
                    <div className="md:max-w-96">
                        <img className="h-9" src={assets.icon.logoDark} alt="dummyLogoDark" />
                        <p className="mt-6 text-sm">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="flex-1 flex items-start md:justify-end gap-20">
                        <div>
                            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
                            <ul className="text-sm space-y-2">
                                <li><Link to={"/"}>Home</Link></li>
                                <li><Link to={"/"} >About us</Link></li>
                                <li><Link to={"/"} >Contact us</Link></li>
                                <li><Link to={"/"} >Privacy policy</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-semibold text-gray-800 mb-5">Subscribe to our newsletter</h2>
                            <div className="text-sm space-y-2">
                                <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
                                <Subscribe1 />
                            </div>
                        </div>
                    </div>
                </div>
                <p className="pt-4 text-center text-xs md:text-sm pb-5">
                    Copyright {new Date().getFullYear()} © Company name. All Right Reserved.
                </p>
            </footer>
        </div>
    )
}

export default Footer1
