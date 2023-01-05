export interface IPost {
  Post: {
    title: string;
    description: string;
    published: boolean;
    postid: number;
    owner_id: number;
    owner: {
      user_id: number;
      email: string;
      created_at: string;
    };
    created_at: string;
  };
  number_of_votes: number;
}
