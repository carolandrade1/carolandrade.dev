export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      info: {
        Row: {
          created_at: string | null
          id: string
          page: Json
        }
        Insert: {
          created_at?: string | null
          id: string
          page: Json
        }
        Update: {
          created_at?: string | null
          id?: string
          page?: Json
        }
      }
      test: {
        Row: {
          created_at: string | null
          id: number
          test: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          test?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          test?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
