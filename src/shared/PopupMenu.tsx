// import styled from "styled-components";
// import Link from "next/link";
// import { Text } from "./system/Text";

// interface PopupMenuProps {
//   handleClick: () => void;
//   isOpen: boolean;
// }

// const infoItemsArray = ["Доставка", "Оплата", "Контакты"];

// const ItemLink = styled(Text).attrs({
//   as: "a",
//   mb: "s",
// })`
//   color: var(--color-black-4);
//   cursor: pointer;

//   :hover {
//     var(--color-black-3)
//   }
// `;

// const Item = ({ title }: { title: string }) => (
//   <Link href="/">
//     <ItemLink mb="s" as="a">
//       {title}
//     </ItemLink>
//   </Link>
// );

// const NavLink = styled(Text).attrs({
//   as: "a",
// })`
//   color: var(--colors-black-3);

//   :hover {
//     color: var(--colors-red);
//   }
// `;

export const PopupMenu = () => {
  return null;
};

// export const PopupMenu = ({ handleClick, isOpen }: PopupMenuProps) => (
//   <ModalOverlay
//     bg="white"
//     isOpen={isOpen}
//     onDismiss={handleClick}
//     css={hideUp("sm")}
//   >
//     <Box width="100%" height="100%" background="white">
//       <Flex
//         width="100%"
//         px="s"
//         alignItems="center"
//         minHeight="60px"
//         bg="red"
//         justifyContent="space-between"
//       >
//         <Text preset="h3" as="span" color="white">
//           МЕНЮ
//         </Text>
//         <CloseButton onClick={handleClick} color="white" />
//       </Flex>
//       <Box px="s">
//         <Box as="ul" css="list-style: none;">
//           {navList.map(({ name, slug }) => (
//             <Flex alignItems="center" height="60px" as="li" key={name}>
//               <NavLink href={buildCategoryPage(slug)}>
//                 <Text as="a" color="" onClick={handleClick}>
//                   {name}
//                 </Text>
//               </NavLink>
//             </Flex>
//           ))}
//         </Box>
//         <Flex flexDirection="column" mt="m">
//           {infoItemsArray.map((item) => (
//             <Item title={item} key={item} />
//           ))}
//         </Flex>
//       </Box>
//     </Box>
//   </ModalOverlay>
// );
