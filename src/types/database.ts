export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          is_seller: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          is_seller?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          is_seller?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      sequences: {
        Row: {
          id: string
          title: string
          description: string | null
          price: number
          seller_id: string
          file_url: string
          preview_url: string | null
          thumbnail_url: string | null
          props_used: string[]
          views_count: number
          purchases_count: number
          rating: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          price: number
          seller_id: string
          file_url: string
          preview_url?: string | null
          thumbnail_url?: string | null
          props_used?: string[]
          views_count?: number
          purchases_count?: number
          rating?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          price?: number
          seller_id?: string
          file_url?: string
          preview_url?: string | null
          thumbnail_url?: string | null
          props_used?: string[]
          views_count?: number
          purchases_count?: number
          rating?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      purchases: {
        Row: {
          id: string
          buyer_id: string
          sequence_id: string
          stripe_payment_intent_id: string
          amount_paid: number
          created_at: string
        }
        Insert: {
          id?: string
          buyer_id: string
          sequence_id: string
          stripe_payment_intent_id: string
          amount_paid: number
          created_at?: string
        }
        Update: {
          id?: string
          buyer_id?: string
          sequence_id?: string
          stripe_payment_intent_id?: string
          amount_paid?: number
          created_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          sequence_id: string
          buyer_id: string
          rating: number
          comment: string | null
          created_at: string
        }
        Insert: {
          id?: string
          sequence_id: string
          buyer_id: string
          rating: number
          comment?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          sequence_id?: string
          buyer_id?: string
          rating?: number
          comment?: string | null
          created_at?: string
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
  }
}
