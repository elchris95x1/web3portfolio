import { useEffect, useState } from "react";

export default function Projects() {
    const [avatarURL, setAvatarURL] = useState();
    const [githubUsername, setGitHubUsername] = useState();
    const [repoData, setRepoData] = useState();

    async function repoDataURL() {
        //Get repo data about github user
        await fetch("https://api.github.com/users/elchris95x1/repos")
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(36, result);
                    const list = result.map((item) => (
                        <div className="text-center">
                            <a target="_blank" href={item.svn_url}>
                                {item.name}
                            </a>
                        </div>
                    ));
                    setRepoData(list);
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    useEffect(() => {
        fetch("https://api.github.com/users/elchris95x1")
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setAvatarURL(result.avatar_url);
                    setGitHubUsername(result.login);
                },
                (error) => {
                    console.log(error);
                }
            );
    }, []);
    return (
        <div></div>
    )
}