import Section from '@/layouts/Section'
import './Devices.scss'
import Grid from '@/components/Grid'
import DeviceCard from '@/components/DeviceCard'

const Devices = (props) => {
  const deviceItems = [
    {
      title: "Smartphone",
      description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store.",
      imgSrc: "/devices/smartphone.svg"
    },
    {
      title: "Tablet",
      description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store.",
      imgSrc: "/devices/tablet.svg"
    },
    {
      title: "Smart TV",
      description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store.",
      imgSrc: "/devices/smart-tv.svg"
    },
    {
      title: "Laptop",
      description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      imgSrc: "/devices/laptop.svg"
    },
    {
      title: "Gaming Console",
      description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store.",
      imgSrc: "/devices/gaming-console.svg"
    },
    {
      title: "VR Headset",
      description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store.",
      imgSrc: "/devices/vr-headset.svg"
    },
  ]

  return (
    <Section
      title="We Provide you streaming experience across various devices."
      titleId="devices-title"
      description="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
    >
      <Grid columns={3}>
        {deviceItems.map((deviceItem, index) => (
          <DeviceCard {...deviceItem} key={index} />
        ))}
      </Grid>
    </Section>
  )
}

export default Devices