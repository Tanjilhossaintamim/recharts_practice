import PriceOption from "../priceOption/PriceOption";

const gymFeatures = [
  {
    id: 1,
    membershipType: "Basic",
    pricePerMonth: 30.0,
    features: [
      "Access to basic gym equipment",
      "Limited group fitness classes",
      "No personal trainer",
    ],
  },
  {
    id: 2,
    membershipType: "Premium",
    pricePerMonth: 60.0,
    features: [
      "Access to premium gym equipment",
      "Unlimited group fitness classes",
      "Option to hire a personal trainer",
    ],
  },
  {
    id: 3,
    membershipType: "Gold",
    pricePerMonth: 90.0,
    features: [
      "Access to premium gym equipment",
      "Unlimited group fitness classes",
      "Dedicated personal trainer",
    ],
  },
  {
    id: 4,
    membershipType: "Family",
    pricePerMonth: 120.0,
    features: [
      "Access for family members",
      "Dedicated personal trainer for each family member",
      "Unlimited group fitness classes",
      "Dedicated personal trainer for each family member",
    ],
  },
];
const PriceOptions = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 m-5">
      {gymFeatures.map((option) => (
        <PriceOption key={option.id} option={option} />
      ))}
    </div>
  );
};

export default PriceOptions;
