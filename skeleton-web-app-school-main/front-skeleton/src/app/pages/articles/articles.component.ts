import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface Article {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

@Component({
  selector: 'app-article',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  article: Article | null = null;
  relatedArticles: Article[] = [];
  isVideo = false;
  videoUrl: SafeResourceUrl | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');
    if (articleId) {
      this.fetchArticle(parseInt(articleId));
      this.fetchRelatedArticles(parseInt(articleId));
    }
  }

  fetchArticle(id: number): void {
    this.http.get<Article>(`http://localhost:8080/articles/${id}`).subscribe(
      data => {
        this.article = data;
        this.checkIfVideo();
      },
      error => {
        console.error('Erreur lors de la récupération de l\'article:', error);
        this.router.navigate(['/']);
      }
    );
  }

  fetchRelatedArticles(currentId: number): void {
    this.http.get<Article[]>('http://localhost:8080/articles').subscribe(
      data => {
        this.relatedArticles = data
          .filter(article => article.id !== currentId)
          .slice(0, 3);
      }
    );
  }

  checkIfVideo(): void {
    if (this.article && this.article.content.startsWith('http')) {
      this.isVideo = true;
      const videoId = this.extractYoutubeId(this.article.content);
      if (videoId) {
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${videoId}`
        );
      }
    }
  }

  extractYoutubeId(url: string): string | null {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }

  navigateToArticle(article: Article): void {
    this.router.navigate(['/article', article.id]).then(() => {
      window.scrollTo(0, 0);
      this.fetchArticle(article.id);
      this.fetchRelatedArticles(article.id);
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }
}