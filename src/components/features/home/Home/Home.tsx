import { HomeCTA } from "../HomeCTA/HomeCTA";
import { HomeHero } from "../HomeHero/HomeHero";
import { HomeInfo } from "../HomeInfo/HomeInfo";

export function Home() {
    return (
        <div>
            <HomeHero />
            <HomeInfo />

            <HomeCTA />
        </div>
    )
}