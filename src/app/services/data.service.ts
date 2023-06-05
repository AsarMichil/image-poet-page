import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.development';

const GROUPS_DB = 'groups';
const MESSAGES_DB = 'messages';
const POEMS_DB = 'poems';

export interface Message {
  created_at: string;
  group_id: number;
  id: number;
  text: string;
  user_id: string;
}

export interface Poem {
  id: number;
  creator: string;
  text: string;
  inserted_at: string;
  updated_at: string;
  title: string;
  poem: string;
  image_link: string; // nullable
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  getGroups() {
    return this.supabase
      .from(GROUPS_DB)
      .select('*')
      .then((result) => result.data);
  }

  getUsersPoems() {
    return this.supabase.from(POEMS_DB).select('*').then((result) => result.data);
  }

  async createGroup(title) {
    const newGroup = {
      creator: (await this.supabase.auth.getUser()).data.user.id,
      title,
    };
    return this.supabase.from(GROUPS_DB).insert(newGroup).select().single();
  }

  async createPoem(title, poem, image_link) {
    const newPoem = {
      creator: (await this.supabase.auth.getUser()).data.user.id,
      poem,
      title,
      image_link,
    };
    return this.supabase.from(POEMS_DB).insert(newPoem).select().single();
  }
}
