export async function GET() {
  return Response.json({
    totalBooks: 520,
    newBooksThisMonth: 20,
    totalMembers: 42,
    newMembersThisWeek: 5,
    booksIssued: 110,
    overdueReturns: 47,
  });
}