import { Box, Button, Flex } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import Link from "next/link";
import React from "react";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

type Props = {};

const Nav = () => {
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery({
    // run query only on browser.
    // pause: true,
    // skip: isServer(),
  });

  let body = null;

  // data is loading
  if (fetching) {
    body = null;
    // user not logged in
  } else if (!data?.me) {
    body = (
      <Flex>
        <Box mr={2}>
          <Link href="/registerBarber">Register as barber</Link>
        </Box>
        <Box mr={2}>
          <Link href="/registerCustomer">Register as customer</Link>
        </Box>
        <Box>
          <Link href="/login">Login</Link>
        </Box>
      </Flex>
    );
    // user is logged in
  } else {
    body = (
      <Flex>
        <Box mr={2}>{data.me.username}</Box>
        <Button
          onClick={() => {
            logout();
          }}
          isLoading={logoutFetching}
          variant="link"
        >
          logout
        </Button>
      </Flex>
    );
  }
  return (
    <Flex zIndex={1} position="sticky" top={0} bg="tan" p={4}>
      <Box>Barber Hub</Box>
      <Box ml="auto">{body}</Box>
    </Flex>
  );
};

export default withUrqlClient(createUrqlClient)(Nav);
