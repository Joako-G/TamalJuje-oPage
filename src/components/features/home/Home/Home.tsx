import { HomeCTA } from "../HomeCTA/HomeCTA";
import { HomeHero } from "../HomeHero/HomeHero";
import { HomeInfo } from "../HomeInfo/HomeInfo";

export function Home() {
    return (
        <div>
            <HomeHero />
            <main className='container-fluid d-flex flex-column w-100 justify-content-center align-items-center'>
                <HomeInfo />
                <HomeCTA />
            </main>
        </div>
    )
}