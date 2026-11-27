// One accent colour per member, assigned by their position in the group.
// The balances endpoint returns members in the same order as group.participators,
// so the Members card and the Group Balance chart line up.
export const MEMBER_COLORS = ['#7C5CFA', '#F06292', '#34D399', '#FB923C', '#38BDF8', '#FACC15']

export function memberColor(index: number) {
  return MEMBER_COLORS[index % MEMBER_COLORS.length]
}
