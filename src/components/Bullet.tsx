import { Text, Flex, Img, Box } from "@chakra-ui/react";

type BulletProps = {
  label: string;
  image: string;
}

const Bullet = ({ label, image }: BulletProps) => {
  const bullet = {
    content: '""',
    display: ["block", "block", "none"],
    width: "10px",
    height: "10px",
    borderRadius: "100%",
    backgroundColor: '#FFBA08',
    mr: "5px"
  }

  return (
    <Box>
      <Img
        src={image}
        alt={label}
        d={["none", "none", "block"]}
      />

      <Text
        _before={bullet}
        d="flex"
        alignItems="baseline"
        justifyContent={["flex-start", "flex-start", "center"]}
        mt={["0", "0", "15px"]}
      >
        {label}
      </Text>
    </Box>
  )
}

export default Bullet;