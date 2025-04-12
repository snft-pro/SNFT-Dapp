import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Card,
  Flex,
  Text,
} from "@chakra-ui/react";
import styles from "@/app/styles/Home.module.css";

export function NftAttributes({
  attributes,
}: {
  attributes: Record<string, unknown>;
}) {
  /**
   * Assume the NFT attributes follow the conventional format
   */
  // @ts-ignore TODO Fix later
  const items = attributes.filter(
    (item: Record<string, unknown>) => item.trait_type
  );
  return (
    <AccordionItem>
      <Text>
        <AccordionButton  className={styles.listnft2}>
          <Box as="span" flex="1" textAlign="left">
            Traits
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Text>
      <AccordionPanel className={styles.listdetails2} pb={4}>
        <Flex direction="row" wrap="wrap" gap="20">
          {/* @ts-ignore TODO Fix later */}
          {items.map((item) => (
            <Card
              key={item.trait_type}
              as={Flex}
              flexDir="column"
              gap={12}
              py={2}
              px={4}
              bg={"transparent"}
              border="1px"
            >
              {item.trait_type && (
                <Text size="label.sm" textAlign="center" lineHeight={1.2}>
                  {item.trait_type}
                </Text>
              )}
              <Text size="label.md" textAlign="center" fontWeight="bold">
                {typeof item.value === "object"
                  ? JSON.stringify(item.value || {})
                  : item.value}
              </Text>
            </Card>
          ))}
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
}
