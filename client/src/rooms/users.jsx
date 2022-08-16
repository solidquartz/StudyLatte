import {
  Heading,
  Avatar,
  Stack,
  Text,
  propNames
} from "@chakra-ui/react";

 const avatarImages=['https://thumbs.dreamstime.com/b/coffee-cup-roast-grains-detailed-illustration-61268266.jpg', 'https://thumbs.dreamstime.com/b/coffee-cup-14555729.jpg', 'https://thumbs.dreamstime.com/b/coffee-sign-14306782.jpg', 'https://thumbs.dreamstime.com/b/coffee-cup-ilustration-39491193.jpg', 'https://thumbs.dreamstime.com/b/coffee-cup-19621825.jpg', 'https://thumbs.dreamstime.com/b/coffee-685132.jpg', 'https://thumbs.dreamstime.com/b/coffee-cup-vector-icon-steam-hot-drink-81730552.jpg', 'https://thumbs.dreamstime.com/b/coffee-cup-icon-isolated-flat-symbol-vector-sign-illustration-white-coffee-cup-icon-isolated-flat-symbol-vector-sign-107298476.jpg'];
 console.log(avatarImages)

export const Users = (props) => {
  
  let randomAvatar = Math.floor(Math.random() * avatarImages.length);
  let picture = avatarImages[randomAvatar]

  return (
    <>
       
      <Stack direction='column'>
        
        <Avatar src={picture} />,
       
      </Stack>
      <Text>{props.username}</Text>
    </>
  );

};