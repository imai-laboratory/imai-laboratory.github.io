export type AccessInfoItem = {
  icon: string;
  titleKey: string;
  contentKey: string;
};

export const accessInfoItems: AccessInfoItem[] = [
  {
    icon: "🏢",
    titleKey: "access.location.title",
    contentKey: "access.location.content",
  },
  {
    icon: "📍",
    titleKey: "access.address.title",
    contentKey: "access.address.content",
  },
  {
    icon: "🏠",
    titleKey: "access.rooms.title",
    contentKey: "access.rooms.content",
  },
  {
    icon: "📞",
    titleKey: "access.contact.title",
    contentKey: "access.contact.content",
  },
];
