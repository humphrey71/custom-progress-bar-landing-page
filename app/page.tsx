import { LandingPageComponent } from "@/components/landing-page"

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return <LandingPageComponent />
}
