import { useUsers } from "@/hooks/useUsers";
import { Table, Spinner, Center, Badge } from "@chakra-ui/react";

export default function UsersTable() {
  const { data: users, isLoading, isError } = useUsers();

  if (isLoading) {
    return (
      <Center py="10">
        <Spinner size="lg" />
      </Center>
    );
  }

  if (isError) {
    return <Center>Something went wrong...</Center>;
  }

  return (
    <Table.ScrollArea
      borderWidth="1px"
      borderRadius="lg"
      maxW={{ base: "288px", sm: "md", md: "lg", lg: "4xl" }}
    >
      <Table.Root size="sm" variant="outline">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader minW="60px" fontSize="16px" fontWeight="bold">
              ID
            </Table.ColumnHeader>
            <Table.ColumnHeader minW="150px" fontSize="16px" fontWeight="bold">
              Name
            </Table.ColumnHeader>
            <Table.ColumnHeader minW="260px" fontSize="16px" fontWeight="bold">
              Email
            </Table.ColumnHeader>
            <Table.ColumnHeader minW="120px" fontSize="16px" fontWeight="bold">
              Role
            </Table.ColumnHeader>
            <Table.ColumnHeader minW="100px" fontSize="16px" fontWeight="bold">
              City
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users.map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell fontSize="11px">{user.id}</Table.Cell>
              <Table.Cell fontSize="13px">
                {user.firstName} {user.lastName}
              </Table.Cell>
              <Table.Cell fontSize="12px" color={"gray.300"}>
                {user.email}
              </Table.Cell>
              <Table.Cell>
                <Badge
                  fontSize="13px"
                  colorPalette={
                    user.role === "admin"
                      ? "green"
                      : user.role === "moderator"
                        ? "blue"
                        : "red"
                  }
                >
                  {user.role}
                </Badge>
              </Table.Cell>
              <Table.Cell fontSize="12px">{user.address.city}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
}
