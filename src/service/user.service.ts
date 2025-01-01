import { DocumentDefinition } from 'mongoose';
import User, { UserDocumentInterface } from '../models/user.model';

export async function createUser(
  input: DocumentDefinition<UserDocumentInterface>
) {
  try {
    return await User.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
}
