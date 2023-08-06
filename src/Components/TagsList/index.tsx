import React from 'react';
import styled from 'styled-components';

type TagType = {
  id: number;
  name: string;
  image?: string;
};

type TagContainerProps = {
  clicked: boolean;
  image?: string;
};

const TagContainer = styled.p<TagContainerProps>`
  background: ${props =>
    props.clicked
      ? `url(${props.image}) center/cover no-repeat #FFFFE0`
      : `url(${props.image}) center/cover no-repeat white`};
  color: ${props => (props.image ? 'white' : props.clicked ? '#FFAE42' : 'grey')};
  height: ${props => (props.image ? '100px' : '30px')};
  min-width: ${props => (props.image ? '90px' : '70px')};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => (props.clicked ? '#FFAE42' : 'grey')};
  border-radius: ${props => (props.image ? '50%' : '10px')};
  cursor: pointer;
  margin-left: 5px;
  font: normal normal bold 14px Open Sans;
`;

const TagsListContainer = styled.div`
  display: flex;
  overflow-x: auto;
  max-width: 100%;
  padding: 10px 0;
`;

type TagsListProps = {
  tags: TagType[];
};

const TagsList: React.FC<TagsListProps> = ({ tags }: TagsListProps) => {
  const [activeTagId, setActiveTagId] = React.useState<number | null>(1);

  const handleTagClick = (tagId: number) => {
    setActiveTagId(tagId === activeTagId ? null : tagId);
  };

  return (
    <TagsListContainer>
      {tags.map(tag => (
        <TagContainer
          key={tag.id}
          clicked={tag.id === activeTagId}
          image={tag.image}
          onClick={() => handleTagClick(tag.id)}
        >
          {tag.name}
        </TagContainer>
      ))}
    </TagsListContainer>
  );
};

export default TagsList;
