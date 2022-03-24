

export interface IFetchPost {
  data: {
    fetchBoard :{
      _id: String,
      writer: String,
      title: String,
      contents: String
      createdAt: String
      likeCount: Number
      dislikeCount: Number
    }
  }
}

export interface ITextarea {
  maxLength?: Number;
}