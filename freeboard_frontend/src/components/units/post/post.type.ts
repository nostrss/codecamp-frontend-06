export interface IFetchPost {
  data: {
    fetchBoard: {
      _id: String;
      writer: String;
      title: String;
      contents: String;
      createdAt: String;
      likeCount: Number;
      dislikeCount: Number;
      images: Array<string>;
      youtubeUrl: string;
    };
  };
  moveUpdate: () => void;
  movetoBoards: () => void;
  deleteButton: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
}
