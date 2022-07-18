import { useEffect, useState } from "react";
import defImg from "../images/default.jpg";
import { motion } from "framer-motion";
import { IoLogoGithub, IoMenu } from "react-icons/io5";

export default function GitProjects() {
    const [repoData, setRepoData] = useState([]);

    const [name, setName] = useState();
    const [language, setLanguage] = useState();
    const [url, setUrl] = useState();


    useEffect(() => {
        fetch("https://api.github.com/users/elchris95x1/repos")
            .then((res) => res.json())
            .then(
                (result) => {
                    setRepoData(result);
                    console.log(result);
                },
                (error) => {
                    console.log(error);
                }
            );

    }, []);



    return (

        <div className="flex flex-wrap items-center justify-evenly my-24 gap-4">
            {repoData.map(item => {
                return (
                    <motion.div
                        key={item.id}
                        className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
                    >
                        <p className="text-lg text-textBase font-medium uppercase">
                            {item.name.length > 25 ? `${item.name.slice(0, 25)}...` : item.name}
                        </p>
                        <img
                            src={defImg}
                            className="w-full h-full object-cover rounded-md my-4 max-h-[150px]"
                            alt=""
                        />
                        <div className="flex flex-1 items-center justify-between">
                            <p className="text-lg text-gray-300">
                                <span className="block text-gray-500 text-xs">
                                    {item.language}
                                </span>
                            </p>
                            <a href={item.html_url} target= "_blank">
                                <motion.div whileTap={{ scale: 0.5 }}>
                                    <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                                </motion.div>
                            </a>
                        </div>
                    </motion.div>
                )
            })}

        </div>
    )
}