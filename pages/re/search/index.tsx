import React from "react";

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchValue: string) => {
    setSearchTerm;
  };

  return (
    <>
      <Container>
        <Header>
          <SearchBar onSearch={handleSearch} />
        </Header>
        <Content>
          <ResultsList searchTerm={searchTerm} />
        </Content>
      </Container>
    </>
  );
};

export default Search;
