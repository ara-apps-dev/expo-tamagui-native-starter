import {
  Card,
  Progress,
  ScrollView,
  Text,
  useTheme,
  View,
  XStack,
  YStack,
} from "tamagui";
import { ScreenWrapper } from "~/components";

const productCategories = [
  "Photo Books",
  "Wall Art",
  "Personalized Gifts",
  "Slideshow",
  "Audio Books",
  "Prints",
];

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <ScreenWrapper
      statusBarBg={`${theme.primary.val}`}
      backgroundColor={`${theme.background.val}`}
    >
      <YStack flex={1} bg="$background">
        {/* Pink Header */}
        <View height={60} backgroundColor="#D83A7D" />

        <ScrollView contentContainerStyle={{ padding: 16 }}>
          {/* Product Categories */}
          <Section title="Product Categories">
            <WrapGrid items={productCategories} />
          </Section>

          {/* Personalized Recommendations */}
          <Section title="Personalized Recommendations">
            <HorizontalCards count={4} />
          </Section>

          {/* Best Sellers & Occasions */}
          <Section title="Best Sellers & Occasions">
            {["Birthdays", "Weddings", "Holidays", "Gifts for Him/Her"].map(
              (title) => (
                <YStack key={title} space="$2">
                  <Text fontWeight="bold">{title}</Text>
                  <HorizontalCards count={4} />
                </YStack>
              )
            )}
          </Section>

          {/* Customization Tools */}
          <Card
            bg="$shadowColor"
            padding="$4"
            marginVertical="$3"
            borderRadius="$4"
          >
            <Text fontWeight="bold">Customization Tools</Text>
            <Text fos="$body-md" color="$gray10">
              Upload photos, Templates, Filters
            </Text>
          </Card>

          {/* Order Tracking */}
          <Card
            bg="$shadowColor"
            padding="$4"
            marginBottom="$4"
            borderRadius="$4"
          >
            <Text fontWeight="bold">Order Tracking & Checkout</Text>
          </Card>

          {/* Saved Projects */}
          <Section title="Saved Projects">
            <Card bg="$shadowColor" padding="$3" borderRadius="$4">
              <Text fos="$body-md" color="$gray11">
                Recently Added
              </Text>
              <Text fontWeight="bold">Photobooks - Baby's First Week</Text>
              <Text fos="$body-md">Status: In Progress</Text>
              <Progress
                value={60}
                height={6}
                bg="$shadowColor"
                caretColor="$pink10"
              />
            </Card>
          </Section>
        </ScrollView>
      </YStack>
    </ScreenWrapper>
  );
}

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <YStack space="$2" marginBottom="$4">
    <XStack justifyContent="space-between">
      <Text fontWeight="bold" fontSize="$body-md">
        {title}
      </Text>
      <Text color="$color">View All</Text>
    </XStack>
    {children}
  </YStack>
);

const WrapGrid = ({ items }: { items: string[] }) => (
  <XStack flexWrap="wrap" justifyContent="space-between">
    {items.map((item, idx) => (
      <Card
        key={idx}
        width="48%"
        height={120}
        bg="$shadowColor"
        marginBottom="$3"
        borderRadius="$4"
      >
        <YStack justifyContent="flex-end" padding="$2">
          <Text>{item}</Text>
        </YStack>
      </Card>
    ))}
  </XStack>
);

const HorizontalCards = ({ count }: { count: number }) => (
  <XStack gap="$2.5" flexDirection="row">
    {[...Array(count)].map((_, i) => (
      <Card
        key={i}
        width={120}
        height={160}
        bg="$shadowColor"
        borderRadius="$4"
      />
    ))}
  </XStack>
);
