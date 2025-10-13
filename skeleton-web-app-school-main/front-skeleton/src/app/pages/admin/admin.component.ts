import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Article {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  activeTab: 'articles' | 'users' = 'articles';
  
  // Articles
  articles: Article[] = [];
  selectedArticle: Article | null = null;
  isEditingArticle = false;
  articleForm = {
    title: '',
    content: '',
    image: ''
  };

  // Users
  users: User[] = [];
  selectedUser: User | null = null;
  isEditingUser = false;
  userForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadArticles();
    this.loadUsers();
  }

  // ========== TAB NAVIGATION ==========
  switchTab(tab: 'articles' | 'users'): void {
    this.activeTab = tab;
    this.cancelArticleEdit();
    this.cancelUserEdit();
  }

  // ========== ARTICLES MANAGEMENT ==========
  loadArticles(): void {
    this.http.get<Article[]>('http://localhost:8080/articles').subscribe(
      data => {
        this.articles = data.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      },
      error => console.error('Erreur lors du chargement des articles:', error)
    );
  }

  createArticle(): void {
    this.isEditingArticle = true;
    this.selectedArticle = null;
    this.articleForm = { title: '', content: '', image: '' };
  }

  editArticle(article: Article): void {
    this.isEditingArticle = true;
    this.selectedArticle = article;
    this.articleForm = {
      title: article.title,
      content: article.content,
      image: article.image
    };
  }

  saveArticle(): void {
    if (!this.articleForm.title || !this.articleForm.content || !this.articleForm.image) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    if (this.selectedArticle) {
      // Update
      this.http.put(`http://localhost:8080/articles/${this.selectedArticle.id}`, this.articleForm)
        .subscribe(
          () => {
            alert('Article modifié avec succès');
            this.loadArticles();
            this.cancelArticleEdit();
          },
          error => console.error('Erreur lors de la modification:', error)
        );
    } else {
      // Create
      this.http.post('http://localhost:8080/articles', this.articleForm)
        .subscribe(
          () => {
            alert('Article créé avec succès');
            this.loadArticles();
            this.cancelArticleEdit();
          },
          error => console.error('Erreur lors de la création:', error)
        );
    }
  }

  deleteArticle(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      this.http.delete(`http://localhost:8080/articles/${id}`).subscribe(
        () => {
          alert('Article supprimé avec succès');
          this.loadArticles();
        },
        error => console.error('Erreur lors de la suppression:', error)
      );
    }
  }

  cancelArticleEdit(): void {
    this.isEditingArticle = false;
    this.selectedArticle = null;
    this.articleForm = { title: '', content: '', image: '' };
  }

  // ========== USERS MANAGEMENT ==========
  loadUsers(): void {
    this.http.get<User[]>('http://localhost:8080/users').subscribe(
      data => {
        this.users = data;
      },
      error => console.error('Erreur lors du chargement des utilisateurs:', error)
    );
  }

  createUser(): void {
    this.isEditingUser = true;
    this.selectedUser = null;
    this.userForm = { firstName: '', lastName: '', email: '', password: '' };
  }

  editUser(user: User): void {
    this.isEditingUser = true;
    this.selectedUser = user;
    this.userForm = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: ''
    };
  }

  saveUser(): void {
    if (!this.userForm.firstName || !this.userForm.lastName || !this.userForm.email) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    if (!this.selectedUser && !this.userForm.password) {
      alert('Le mot de passe est obligatoire pour un nouvel utilisateur');
      return;
    }

    const userData = this.selectedUser && !this.userForm.password
      ? { firstName: this.userForm.firstName, lastName: this.userForm.lastName, email: this.userForm.email }
      : this.userForm;

    if (this.selectedUser) {
      // Update
      this.http.put(`http://localhost:8080/users/${this.selectedUser.id}`, userData)
        .subscribe(
          () => {
            alert('Utilisateur modifié avec succès');
            this.loadUsers();
            this.cancelUserEdit();
          },
          error => console.error('Erreur lors de la modification:', error)
        );
    } else {
      // Create
      this.http.post('http://localhost:8080/users', userData)
        .subscribe(
          () => {
            alert('Utilisateur créé avec succès');
            this.loadUsers();
            this.cancelUserEdit();
          },
          error => console.error('Erreur lors de la création:', error)
        );
    }
  }

  deleteUser(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      this.http.delete(`http://localhost:8080/users/${id}`).subscribe(
        () => {
          alert('Utilisateur supprimé avec succès');
          this.loadUsers();
        },
        error => console.error('Erreur lors de la suppression:', error)
      );
    }
  }

  cancelUserEdit(): void {
    this.isEditingUser = false;
    this.selectedUser = null;
    this.userForm = { firstName: '', lastName: '', email: '', password: '' };
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}